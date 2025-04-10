import { Component, OnInit } from '@angular/core';

interface Tweet {
  id: string;
  content: string;
  timestamp: Date;
}

@Component({
  selector: 'app-tweet',
  standalone: false,
  templateUrl: './tweet.component.html',
  styleUrl: './tweet.component.css'
})
export class TweetComponent implements OnInit {
  tweets: Tweet[] = [];
  newTweetContent: string = '';
  editingTweet: Tweet | null = null;

  ngOnInit() {
    this.loadTweetsFromStorage();
  }

  loadTweetsFromStorage() {
    const storedTweets = sessionStorage.getItem('tweets');
    if (storedTweets) {
      this.tweets = JSON.parse(storedTweets);
    }
  }

  saveTweetsToStorage() {
    sessionStorage.setItem('tweets', JSON.stringify(this.tweets));
  }

  createTweet() {
    if (this.newTweetContent.trim()) {
      const newTweet: Tweet = {
        id: Date.now().toString(),
        content: this.newTweetContent,
        timestamp: new Date()
      };
      this.tweets.unshift(newTweet);
      this.saveTweetsToStorage();
      this.newTweetContent = '';
    }
  }

  startEditing(tweet: Tweet) {
    this.editingTweet = { ...tweet };
  }

  updateTweet() {
    if (this.editingTweet && this.editingTweet.content.trim()) {
      const index = this.tweets.findIndex(t => t.id === this.editingTweet!.id);
      if (index !== -1) {
        this.tweets[index] = { ...this.editingTweet };
        this.saveTweetsToStorage();
        this.editingTweet = null;
      }
    }
  }

  deleteTweet(id: string) {
    this.tweets = this.tweets.filter(tweet => tweet.id !== id);
    this.saveTweetsToStorage();
  }

  cancelEditing() {
    this.editingTweet = null;
  }
}
