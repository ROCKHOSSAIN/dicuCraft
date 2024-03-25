import ContentDisplay from '@/app/components/ContentDisplay';

const contentPage = ({params:{contentId}}) => {
    return (
        <div>
            {contentId}
            <ContentDisplay id={contentId}/>
        </div>
    );
};

export default contentPage;