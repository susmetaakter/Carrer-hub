import React from 'react';

const Home = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('data1.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])


    return (
        <div>
            
        </div>
    );
};

export default Home;