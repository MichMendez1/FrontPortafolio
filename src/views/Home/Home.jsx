import React from 'react';

const HomePage = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const { Name, Email, Role } = user || {}
  return (
    <div className="container">
      <h1 className="mt-5">¡Bienvenido, {Name}!</h1>
      <p className="my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo, felis eu congue
        aliquet, dolor velit tristique nulla, id efficitur sapien felis at lorem. Quisque iaculis
        turpis nec mi lobortis, id commodo nulla lobortis. Vestibulum dapibus mauris nec nulla
        commodo, id efficitur felis dignissim. Sed vel pulvinar sem, non pellentesque ipsum.
      </p>
      <p className="my-4">
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
        Suspendisse sollicitudin ligula non velit ultrices faucibus. Sed condimentum sem et tellus
        rhoncus, id tempor risus lobortis. Quisque sed finibus enim. Integer a felis sapien.
      </p>
      <p className="my-4">
        Sed in velit ac nisi pharetra egestas eu eget felis. Aliquam ac lectus at justo euismod
        scelerisque. Fusce at feugiat tortor. Nunc auctor ullamcorper varius. Nulla facilisi. Sed
        fermentum quam at tortor ultrices, vitae cursus nisi interdum. Sed sed augue non urna
        porttitor mollis. Aenean dignissim libero in mi rhoncus, a feugiat ligula viverra.
      </p>
    </div>
  );
};

export default HomePage;
