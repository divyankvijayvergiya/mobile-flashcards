import { AsyncStorage } from 'react-native'

export const DECKS_STORAGE_KEY = "MobileFlashcards:decks"

export function setDummyData(){
  let dummyData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces.',
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'In the componentDidMount lifecycle event',
        },
      ],
    },

    Android: {
      title: 'Android',
      questions: [
        {
          question: 'Does react-native works with Android?',
          answer: 'Yes, react-native is cross development Platform use for both ios and android apps',
        },
      ],
    },
  }

  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData))
  return dummyData;
}

export function formatDecks(results){
  return results === null ? setDummyData() : JSON.parse(results)
}
