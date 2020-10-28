import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import { getPlants, getAllFamilies } from '../../api/client';
import PlantsList from '../../containers/PlantsList';
import CategoryFilter from '../CategoryFilter/CategoryFilter';
import { getPlantFamiliesList, getPlantsList } from '../../selectors/index';
import {
  fetchInit,
  fetchPlants,
  fetchFail,
  fetchCategories,
} from '../../actions/index';

const Home = ({
  plants,
  categories,
  loading,
  error,
  fetchInit,
  fetchPlants,
  fetchFail,
  fetchCategories,
}) => {
  const filter = useSelector(store => store.filterReducer);

  const handleFetchPlants = async () => {
    fetchInit();

    try {
      const result = await getPlants(filter);
      const categories = await getAllFamilies();
      fetchPlants(result);
      fetchCategories(categories);
    } catch (e) {
      fetchFail();
    }
  };

  const handleFilterChange = async category => {
    const filteredPlants = await getPlants(category);
    fetchPlants(filteredPlants);
  };

  useEffect(() => {
    handleFetchPlants();
  }, []);

  return (
    <div>
      <CategoryFilter categories={categories} onFilter={handleFilterChange} />
      {error && <p>Something went wrong</p>}
      {loading ? (
        <div>Data is loading</div>
      ) : (
        <div>
          <PlantsList plants={plants} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const { plants: { loading, error } } = state;
  const plants = getPlantsList(state);
  const categories = getPlantFamiliesList(state);
  return {
    plants,
    categories,
    loading,
    error,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchInit: () => dispatch(fetchInit()),
  fetchPlants: result => dispatch(fetchPlants(result)),
  fetchFail: () => dispatch(fetchFail()),
  fetchCategories: categories => dispatch(fetchCategories(categories)),
});

Home.propTypes = {
  plants: PropTypes.arrayOf(PropTypes.object),
  categories: PropTypes.arrayOf(PropTypes.object),
  loading: PropTypes.bool,
  error: PropTypes.bool,
  fetchInit: PropTypes.func.isRequired,
  fetchPlants: PropTypes.func.isRequired,
  fetchFail: PropTypes.func.isRequired,
  fetchCategories: PropTypes.func.isRequired,
};

Home.defaultProps = {
  plants: [],
  categories: [],
  loading: false,
  error: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
