import { User } from '../interfaces'

/** Dummy user data. */
export const dataArray: User[] = [
  { id: 101, typeDocument: 1, document: 95950000, name: 'Diego', lastname: 'Arce' },
  { id: 102, document: 95951000, name: 'Kylian', lastname: 'Embappé', typeDocument: 1,
       turn: {
         id: 12,
         time: '10:00 am 25-05-2022',
         professional: 'Carlos Torres',
         consulting : 'A10',
         payment: true
       }
   },
  { id: 103, document: 95952000, name: 'mohamed', lastname: 'Salah', typeDocument: 1,
        turn: {
          id: 12,
          time: '10:00 am 25-05-2022',
          professional: 'Carlos Torres',
          consulting : 'A10',
          payment: false
        } 
  },
]

/**
 * Calls a mock API which finds a user by ID from the list above.
 *
 * Throws an error if not found.
 */
export async function findData(document: number | string, typeDocument:number | string) {
  const selected: User = dataArray.find((data) => (data.document === Number(document) && data.typeDocument === Number(typeDocument)))

  // if (!selected) {
  //   throw new Error('No Encontramos sus datos en el sistema')
  // }

  return selected
}

/** Calls a mock API which returns the above array to simulate "get all". */
export async function findAll() {
  // Throw an error, just for example.
  if (!Array.isArray(dataArray)) {
    throw new Error('Cannot find users')
  }

  return dataArray
}
