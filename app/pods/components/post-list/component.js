import Component from '@ember/component';
import {inject as service} from '@ember/service';

const dummyResponse = {
  "links": {
    "self": "http://example.com/articles",
    "next": "http://example.com/articles?page[offset]=2",
    "last": "http://example.com/articles?page[offset]=10"
  },
  "data": [{
    "type": "articles",
    "id": "1",
    "attributes": {
      "title": "JSON:API paints my bikeshed!"
    },
    "relationships": {
      "author": {
        "links": {
          "self": "http://example.com/articles/1/relationships/author",
          "related": "http://example.com/articles/1/author"
        },
        "data": { "type": "people", "id": "9" }
      },
      "comments": {
        "links": {
          "self": "http://example.com/articles/1/relationships/comments",
          "related": "http://example.com/articles/1/comments"
        },
        "data": [
          { "type": "comments", "id": "5" },
          { "type": "comments", "id": "12" }
        ]
      }
    },
    "links": {
      "self": "http://example.com/articles/1"
    }
  }],
  "included": [{
    "type": "people",
    "id": "9",
    "attributes": {
      "firstName": "Dan",
      "lastName": "Gebhardt",
      "twitter": "dgeb"
    },
    "links": {
      "self": "http://example.com/people/9"
    }
  }, {
    "type": "comments",
    "id": "5",
    "attributes": {
      "body": "First!"
    },
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "2" }
      }
    },
    "links": {
      "self": "http://example.com/comments/5"
    }
  }, {
    "type": "comments",
    "id": "12",
    "attributes": {
      "body": "I like XML better"
    },
    "relationships": {
      "author": {
        "data": { "type": "people", "id": "9" }
      }
    },
    "links": {
      "self": "http://example.com/comments/12"
    }
  }]
}
export default Component.extend({
  store: service(),

  async init() {
    this._super(...arguments);
    // api call  GET baseurl/posts
    // const posts =  await this.store.findAll('post');
    // this.set('posts',posts);
    let article = this.store.createRecord('article',{...dummyResponse.data[0].attributes});
    let authorId =dummyResponse.data[0].relationships.author.data.id;
    let authorData = dummyResponse.included.find((i)=>{
      return i.type =="people" && i.id ==authorId
    }).attributes;
    let author = this.store.createRecord('people',authorData);
    article.set('id',dummyResponse.data[0].id);
    author.set('id',authorId);
    article.set('author',author);

    const commentData =dummyResponse.included.filter((i)=>i.type ==="comments");
    const commentRecords = commentData.map((c)=>{
      let comment = this.store.createRecord('comment',{...c.attributes});
        comment.set("id",c.id);
        comment.set("author",author)
        return comment;
    });
    article.set('comments',commentRecords);
    this.set('article',article)

    const secondComment = this.store.peekRecord('comment','12');
    secondComment.set('body',"i changed this");

    const firstComment =article.get('comments.firstObject');
    firstComment.set('body','changed through article');
  }
});
