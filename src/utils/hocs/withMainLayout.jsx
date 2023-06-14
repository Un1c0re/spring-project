import MainLayout from "@/components/MainLayout";

const withMainLayout = (Page) => {
    return () => (
        <MainLayout>
            <Page />
        </MainLayout>
    );
};

export default withMainLayout;