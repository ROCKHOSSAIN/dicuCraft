import { getDocumentContent } from '@/lib/doc';

const ContentDisplay = async ({id}) => {
    const documentContent = await getDocumentContent(id)
    console.log(documentContent)
    return (
        <div>
            doc display
        </div>
    );
};

export default ContentDisplay;