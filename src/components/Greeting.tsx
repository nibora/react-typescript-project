type Properties = {
    name: string;
};

const Greeting = (props: Properties) => {
    return <p>Hallo, {props.name}!</p>;
};

export default Greeting