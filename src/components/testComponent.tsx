export default function TestComponent({ name = 'world', count = "5" }) {
    return (
        <div>
            {[...Array(parseInt(count, 10))].map((e, i) => <div key={i}>Hello, {name}!</div>)}
        </div>
    )
}