import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import firestore from '@react-native-firebase/firestore';

interface User {
  id: string;
  name: string;
  // Add more user properties here
}

interface UserContextProps {
  users: User[];
  getAllUsers: () => void;
  getUserById: (userId: string) => Promise<User | null>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUserContext = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};

interface UserContextProviderProps {
  children: ReactNode;
}

export const UserContextProvider: React.FC<UserContextProviderProps> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);

  const getAllUsers = async () => {
    try {
      const usersSnapshot = await firestore().collection('users').get();
      const usersData = usersSnapshot.docs.map(
        doc => ({id: doc.id, ...doc.data()} as User),
      );
      setUsers(usersData);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const getUserById = async (userId: string): Promise<User | null> => {
    try {
      const userDoc = await firestore().collection('users').doc(userId).get();
      if (userDoc.exists) {
        return {id: userDoc.id, ...userDoc.data()} as User;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  const contextValue: UserContextProps = {
    users,
    getAllUsers,
    getUserById,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
