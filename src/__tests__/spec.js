import moxios from 'moxios';
import { storeFn } from 'Root';
import { login, logout, register, loadUser } from '../actions/auth';


// Integration Testing
// 
// These tests check the action creators that involve async actions. We use moxios to controll the 
// network connects.

describe ('actions test', () => {

    beforeEach ( () => {
        moxios.install();
    });

    afterEach ( () => {
        moxios.uninstall();
    });

    test ('Login Action updates store correctly', () => {

        const store = storeFn();

        moxios.wait( () => {
            const request = moxios.requests.mostRecent();
            request.respondWith ({
                status: 200,
                response: { token: '12345' }
            });
        });

        return store.dispatch(login())
        .then (() => {
            const newState = store.getState();
            expect(newState.auth).toEqual( {
                token: '12345',
                isAuthenticated: true,
                loading: true,
                user: null
            });
        });
    });

    test ('Register Action updates store correctly', () => {

        const store = storeFn();

        moxios.wait( () => {
            const request = moxios.requests.mostRecent();
            request.respondWith ({
                status: 200,
                response: { token: '12345' }
            });
        });

        return store.dispatch(register())
        .then (() => {
            const newState = store.getState();
            expect(newState.auth).toEqual( {
                token: '12345',
                isAuthenticated: true,
                loading: true,
                user: null
            });
        });
    });

    test ('LoadUser Action updates store correctly', () => {

        const initState = {
            auth: {
                token: '12345',
                isAuthenticated: true,
                loading: true,
                user: null
    
            }
        };

        const store = storeFn(initState);

        moxios.wait( () => {
            const request = moxios.requests.mostRecent();
            request.respondWith ({
                status: 200,
                response: { 
                    user_id: 1000,
                    email: 'test@test.com',
                    username: 'Test' 
                }
            });
        });

        return store.dispatch(loadUser())
        .then (() => {
            const newState = store.getState();
            expect(newState.auth).toEqual( {
                token: '12345',
                isAuthenticated: true,
                loading: false,
                user: {
                    user_id: 1000,
                    email: 'test@test.com',
                    username: 'Test'
                }
            });
        });
    });

});
