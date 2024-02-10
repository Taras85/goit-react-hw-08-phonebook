import React from 'react';
import { Dna } from 'react-loader-spinner';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
}

export const Loader = () => {
  return (
    <div style={styles.container}>
      <Dna
        visible={true}
        height="50"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
};

// export default Loader;