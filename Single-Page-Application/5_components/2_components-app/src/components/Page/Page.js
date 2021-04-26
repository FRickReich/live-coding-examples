import { Message } from './../';
import './Page.css';

const Page = () => 
{

    function handleClick(event)
    {
        console.log('Ich wurde angeklickt!');
    }

    return (
        <div className="Page">

            <button onClick={ handleClick }>
                Sag etwas in der konsole!
            </button>
            

            <Message isVisible={true} state="success"></Message>
            <Message isVisible={false} state="success">Unsere 2. Nachricht</Message>
            <Message isVisible={false} state="failure">Unsere 3. Nachricht</Message>
            <Message isVisible={true} state="success"><i>Ich bin kursiv!</i></Message>
            <Message isVisible={true} state="failure">Unsere 5. Nachricht</Message>

        </div>
    );
}

export default Page;
