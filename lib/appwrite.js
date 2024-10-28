import SignIn from '@/app/(auth)/sign-in';
import { Account, Client, ID, Databases, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.CarManagement',
    projectId: '671ec48400008bee12f9',
    databaseId: '671ec6580001bdc939c3',
    userCollectionId: '671ec6830011763d04dd',
    carCollectionId: '671ec6bb002dbaab7a94',
    employeeCollectionId: '671ec771001c8b7f6dcf',
    storageId: '671ec9ba000b5627aec5'
}

// Init your React Native SDK
const client = new Client();
const databases = new Databases(client)

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
    const account = new Account(client);

export const createUser = async (email, password, username) => {
// Rejestracja użytkownika
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw Error;

        await signIn(email, password);
        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
            }
        )
        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password)

        return session;
    } catch (error) {
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
      const currentAccount = await account.get();
      if (!currentAccount) throw Error;
  
      // const currentUser = await databases.listDocuments(
      //   config.databaseId,
      //   config.userCollectionId,
      //   [Query.equal("accountId", currentAccount.$id)]
      // );
  
      // if (!currentUser) throw Error;
  
      // return currentUser.documents[0];
  
      return currentAccount;
    } catch (error) {
      throw new Error(error);
    }
  };

export const signOut = async () => {
    try {
        const session = await account.deleteSession('current');

        return session;
    } catch (error) {
        throw new Error(error)
    }
}