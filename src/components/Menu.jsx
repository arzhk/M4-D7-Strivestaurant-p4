import React from "react";
import dishes from "../data/menu.json";
import SingleDish from "./SingleDish.jsx";
import { Container, Alert } from "react-bootstrap";

const Menu = () => (
  <Container>
    {dishes.length === 0 && (
      <Alert className="mt-4" variant="secondary">
        Work in progress
      </Alert>
    )}
    {dishes && dishes.map((dish) => <SingleDish dish={dish} key={dish.id} />)}
  </Container>
);
export default Menu;
