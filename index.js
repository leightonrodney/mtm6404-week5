const App = () => {

    const options = [
        {
            id: 1,
            name: 'mark',
        },
        {
            id: 2,
            name: 'mary',
        },
        {
            id: 3,
            name: 'jane',
        },
        {
            id: 4,
            name: 'kevin',
        },
        {
            id: 5,
            name: 'sally',
        },
        {
            id: 6,
            name: 'femi',
        },
        {
            id: 7,
            name: 'chimdi',
        },
        {
            id: 8,
            name: 'kyle',
        },
        {
            id: 9,
            name: 'jesse',
        },
        {
            id: 10,
            name: 'michael',
        },

    ]

    const handleCheckout = (s) => {
        alert(`Checkout successful! Your subtotal is: ${s}`);
    }

    const handleStudentList = (e) => {
        const selectedStudent = e.target.value;
        console.log(`You have selected: ${selectedStudent}`);
    }

    const [greeting, setGreeting] = React.useState('Hello.');

    const handleGreeting = () => {
        setGreeting('Hello, Leighton');
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('user logged in.')
    }

    const [message, setMessage] = React.useState('');

    const handleInputChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(message);

        // clear the form field
        setMessage('');
    }

    const [search, setSearch] = React.useState('');
    const [data, setData] = React.useState(options);

    React.useEffect(() => {
      if (search === ''){
        setData(options)
        return;
      }
      setData(data.filter(item => item.name.includes(search.toLowerCase())))
    }, [search])

    const handleSearchChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(`You searched for: ${search}`)
    }

    const StudentList = () => {

        return data.map((student) =>
            <li key={student.id}>{student.name}</li>
        );

    }




    return (
        <>
            {/* 
            <button onClick={() => {handleCheckout('$200.00')}}>Checkout</button>

            <select onChange={handleStudentList}>
                {
                    options.map((listoption, index) =>
                        <option key={index}>{listoption.name}</option>
                    )
                }
            </select>
            
            <h1>{greeting}</h1>
            <button onClick={handleGreeting}>Click</button>
            */}

            <form onSubmit={handleSearch}>
                <input type="text" id="search" value={search} onChange={handleSearchChange} />
                <button>Search</button>
            </form>
            <StudentList />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);