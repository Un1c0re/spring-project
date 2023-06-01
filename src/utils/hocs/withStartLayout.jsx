import StartLayout from "@/components/StartLayout";

const withStartLayout = (Page) => {
    return () => (
        <StartLayout>
            <Page/>
        </StartLayout>
    );
};

export default withStartLayout;