import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement: function() {
    let items = this.get('items');
    console.table(items);

    items.forEach((item) => {
      let membersInfo = item[3];
      let members = '';

      if (Array.isArray(membersInfo)) {
        membersInfo.forEach((member) => {
          members += `<img src="${member}" class="avatar" />`;
        });
      } else {
        members += `<img src="${membersInfo}" class="avatar" />`;
      }

      let output = `
        <li>
          <div class="img" style="background-image: url(${item[2]})"></div>

          <div class="event">
            <h2>${item[0]}</h2>
            <div class="members">
              ${members}
            </div>
          </div>

          <div class="event-details">
            <div class="description">
              ${item[1]}
            </div>
            <div class="quantity">
              <span class="fa fa-users"></span> <span>${item[4]}</span>
            </div>
          </div>

          <div class="like"></div>
          <div class="dislike"></div>
        </li>`;

      Ember.$(".tinderslide ul").prepend(output);
    });

    Ember.$(".tinderslide").jTinder({
      // dislike callback
      onDislike: function (item) {
        // set the status text
        Ember.$('#status').html('Dislike image ' + (item.index()+1));
      },
      // like callback
      onLike: function (item) {
        // set the status text
        Ember.$('#status').html('Like image ' + (item.index()+1));
      },
      animationRevertSpeed: 200,
      animationSpeed: 400,
      threshold: 1,
      likeSelector: '.like',
      dislikeSelector: '.dislike'
    });

    Ember.$('.actions .like, .actions .dislike').click(function(e){
      e.preventDefault();
      Ember.$(".tinderslide").jTinder(Ember.$(this).attr('class'));
    });
  }
 });
