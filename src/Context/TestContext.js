/* Test Purposes only for how the React.createContext works */

const TestContext = createContext(null)

// Retrieve test4 object
const everything = useContext(TestContext); //
const setSomething = everything.setSomething;

// Same As:
// const { setSomething } = useContext.setSomething;
// It's retrieving the setSomething function

setSomething();
// Accepts a context obj - destructure email passed through Provider
const { email } = useContext(TestContext)


const testElement = () => {

    const test4 = {
        name: 'Ian',
        email: 'ian@aaa.com'
    };

    return (
        <TestContext.Provider value={{ test4 }} />
            <div>Anything Goes Here</div>
        </TestContext.Provider>
    )
}