import ContentDisplay from '../../../ContentDisplay.jsx';

const SubContentPage = ({params:{subContentId}}) => {
    return (
        <div>
            {subContentId}
    <ContentDisplay id={subContentId}/>
        </div>
    );
};

export default SubContentPage;