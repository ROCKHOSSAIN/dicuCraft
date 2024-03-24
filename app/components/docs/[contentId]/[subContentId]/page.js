import ContentDisplay from '../../../ContentDisplay.jsx';

const SubContentPage = ({params:{contentId}}) => {
    return (
        <div>
    <ContentDisplay id={contentId}/>
        </div>
    );
};

export default SubContentPage;