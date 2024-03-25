import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc"
import { getDocumentsByCategory } from "@/utils/doc-util";

const CategoriesPage = ({params:{name}})=>{

    const docs = getDocuments();
    const matchedDocs = getDocumentsByCategory(docs,name)
    return (
        <div>
            <ContentDisplay id={matchedDocs[0].id}/>
        </div>
    )
}
export default CategoriesPage