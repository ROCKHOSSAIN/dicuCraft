import ContentDisplay from '../../ContentDisplay.jsx';

const contentPage = ({params:{contentId}}) => {
    return (
        <div>
            <ContentDisplay id={contentId}/>
        </div>
    );
};

export default contentPage;