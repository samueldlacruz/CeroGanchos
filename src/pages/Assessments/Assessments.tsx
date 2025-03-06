import AssessmentsList from "../../components/AssessmentsList"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import PageContainer from "../../components/PageContainer"

const Assessments = () => {
    return (
        <PageContainer>
            <Header withoutNav />
            <main className="h-full">
                <AssessmentsList />
            </main>
            <Footer />
        </PageContainer>
    )
}

export default Assessments