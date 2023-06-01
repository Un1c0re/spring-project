import MainLayout from "@/components/MainLayout";

const withMainLayout = (Page, index) => {
    return () => (
        <MainLayout index={index}>
            <Page/>
        </MainLayout>
    );
};

export default withMainLayout;