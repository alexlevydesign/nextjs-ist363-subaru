import ColorPicker from '../../components/ColorPicker';
import Heading from '../../components/Heading';
import Layout from '../../components/Layout';
import Showcase from '../../components/Showcase';
import { getVehicleBySlug, getAllVehicleSlugs } from '../../lib/api';
import { getDrivingLocations } from '../../lib/locations';
import Head from 'next/head';
import Image from 'next/image';
import TrimPicker from '../../components/TrimPicker';
import Container from '../../components/Container';

//Waterfall
// 1. getStaticPaths

export async function getStaticPaths() {
    const vehicles = await getAllVehicleSlugs();
    const paths = vehicles.map((vehicle) => {
        const {slug} = vehicle.node
        return {
            params: {
                id: slug
            }
        }
    });

return {
    paths,
    fallback: false
}
}

// 2. getStaticProps
export async function getStaticProps({params}) {
    const vehicleData = await getVehicleBySlug(params.id);
    const drivingLocations = getDrivingLocations();
    return {
        props : {
            vehicleData,
            drivingLocations
        }
    }

}

// 3. page component
const SingleVehiclePage = ({vehicleData, drivingLocations}) => {
    const {title, slug, featuredImage, vehicleInformation} = vehicleData;
    const { headline } = vehicleInformation.showcase;
    const {trimLevels, vehicleColors} = vehicleInformation;
    return <Layout>
    <Head>
        <title>{title} | Subaru USA</title>
    </Head>
    <Showcase
        subtitle={title}
        title={headline}
        featuredImage={featuredImage}
    />
    <div id="main-content">
    <Container>
        <TrimPicker trims={trimLevels} locations={drivingLocations} />
        <ColorPicker
            colors={vehicleColors}
        />
    </Container>
    </div>
    </Layout>
}

export default SingleVehiclePage;
