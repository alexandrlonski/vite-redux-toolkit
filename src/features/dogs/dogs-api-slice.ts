import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const DOGS_API_KEY = 'cbfb51a2-84b6-4025-a3e2-ed8616edf311';

interface Breeds {
    id: string;
    name: string;
    image: {
        url: string
    }
}

export const apiDogSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(hedears) {
            hedears.set('x-api-key', DOGS_API_KEY);

            return hedears
        }
    }),
    endpoints(builder) {
        return {
            fetchBreeds: builder.query<Breeds[], number | void> ({
                query(limit = 10) {
                    return `/breeds?limit=${limit}`;
                }
            })
        }
    }
});

export const { useFetchBreedsQuery } = apiDogSlice;