import React from 'react';
import User from '../pages/user';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

jest.mock('axios', () => {
    const exampleUser = [
        {
            email: 'user@example.com',
            id: 0,
            image_id: 0,
            name: 'user',
            phone: '12345',
            role: 'user',
            twitter: '@user',
            website: 'www.example.com'
        }
    ];

    return {
        get: jest.fn(() => {
            return Promise.resolve(exampleUser);}
        ),
    };
});

const axios = require('axios');

it('fetch user on #componentDidMount', async (done) => {

    const user = shallow(<User />);
    user
        .instance()
        .componentDidMount()
        .then(() => {
            expect(axios.get).toHaveBeenCalled();
            expect(user.state()).toHaveProperty('user', [
                {
                    email: 'user@example.com',
                    id: 0,
                    image_id: 0,
                    name: 'user',
                    phone: '12345',
                    role: 'user',
                    twitter: '@user',
                    website: 'www.example.com'
                }
            ]);
            done();
        });
});
