import { Injectable } from '@angular/core';

export interface UserProfile {
  name: string;
  email: string;
  location: string;
  preferences: {
    language: string;
    theme: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private userProfile: UserProfile = {
    name: 'Teja',
    email: 'KTeja@gmail.com',
    location: 'New York, USA',
    preferences: {
      language: 'English',
      theme: 'Light'
    }
  };

  constructor() { }

  getUserProfile(): UserProfile {
    return this.userProfile;
  }

  updateUserProfile(profile: Partial<UserProfile>): void {
    this.userProfile = { ...this.userProfile, ...profile };
  }

  updatePreferences(preferences: Partial<UserProfile['preferences']>): void {
    this.userProfile.preferences = { ...this.userProfile.preferences, ...preferences };
  }
}