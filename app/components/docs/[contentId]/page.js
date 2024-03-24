import ContentDisplay from '../../ContentDisplay.jsx';

const contentPage = ({params:{contentId}}) => {
    return (
        <div>
            {contentId}
            <ContentDisplay id={contentId}/>
        </div>
    );
};

export default contentPage;