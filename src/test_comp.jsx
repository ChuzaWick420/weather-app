const TestFunc = ({age_setter, my_age}) => {

    // const my_age_after_ten_years = age + 10;

    return (
        <button onClick={() => age_setter(my_age + 10)}>Increase 10 years</button>
    );
};

export default TestFunc