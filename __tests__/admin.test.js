import 'jsdom-global/register';
import React from 'react';
import Admin from '../pages/admin';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

jest.mock('axios', () => {
    const exampleUser =
        {
            data:
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
        };
    const exArray = {
        data: [
            {
                title: 'A title',
                description: 'A description'
            }
        ]
    };

    return {
        get: jest.fn((text) => {
            if(text.includes('user/undefined/')) {
                return Promise.resolve(exArray);
            } else {
                return Promise.resolve(exampleUser);}
        }
        ),
    };
});

const axios = require('axios');

it('fetch user on #componentDidMount', async (done) => {

    const admin = shallow(<Admin />);
    admin
        .instance()
        .componentDidMount()
        .then(() => {
            expect(axios.get).toHaveBeenCalled();
            expect(admin.state()).toHaveProperty('users',
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
            );
            done();
        });
});