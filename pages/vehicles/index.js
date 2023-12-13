import {useState} from 'react';
import Container from '../../Components/Container';
import FilterBar from '../../components/FilterBar'
import Grid from '../../Components/Grid';

import Layout from '../../components/Layout';

import { getAllVehicles, getVehicleTypes } from '../../lib/api';

export async function getStaticProps() {
    const vehicles = await getAllVehicles();
    const vehicleTypes = await getVehicleTypes();
    
vehicleTypes.unshift({
    "node": {
        "name": "All",
        "slug": "all"
    }
});

    return {
        props: {
            vehicles,
            vehicleTypes
        }
    }
}

const VehiclesPage = ({vehicles, vehicleTypes}) => {
    //add "all" to vehicle types
    const [activeVehicleType, setActiveVehicleType] = useState("all");
    

    // filter vehicles by activeVehicleType
    
const filteredVehicles = activeVehicleType === 'all' ? vehicles : vehicles.filter
((vehicle) => {
    const {vehicleTypes} = vehicle.node;
    const vehicleTypeSlugs = vehicleTypes.edges.map((vehicleType) => {
        return vehicleType.node.slug;
    });
    return vehicleTypeSlugs.includes(activeVehicleType);
});
    
    return <Layout>
        <h1>Vehicles</h1>
        <Container>
            <FilterBar items={vehicleTypes} activeItem={activeVehicleType} setActiveItem={setActiveVehicleType} />
            <Grid 
            items={filteredVehicles}

            />
        </Container>
    </Layout>
}
export default VehiclesPage;