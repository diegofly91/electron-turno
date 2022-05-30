import { createContext, useState } from "react";
type Props = {
    children: any
}

export const UserContext = createContext<any | null>(null);

export const UserProvider = ({ children }: Props) => {
    
    const [ typeDocument, setTypeDocument ] = useState(null);
    const [ document, setDocument ] = useState('');
    const [ user, setUser ] = useState(null)


    const clear = () => {
        setTypeDocument(null);
        setDocument('');
        setUser(null)
    }

    const updateDocument = (value) => {
        if(document.length < 12){
            setDocument(document+""+value);
        }

    }
    const clearDocument = () => {
        setDocument('')
    }

    return<UserContext.Provider
                value={{ typeDocument, setTypeDocument, document, updateDocument, user, setUser, clear, clearDocument }}
           >
                    {children}
          </UserContext.Provider>;
}