import { getDocumentContent } from '@/lib/doc';
import React from 'react';

const ContentDisplay = ({id}) => {
    const documentation = await getDocumentContent(id)
    console.log("hlw",documentation)
    return (
        <div>
            {contentId}
        </div>
    );
};

export default ContentDisplay;