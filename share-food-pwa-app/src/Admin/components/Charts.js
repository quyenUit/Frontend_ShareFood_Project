import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { Container, Row } from "react-bootstrap";
import { apiUrl } from "../../components/constants/apiURL";

const Charts = () => {
  const [order, setOrder] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const amount = [];
    const orderDate = [];

    axios
      // "http://localhost:3001/orders"
      .get(`${apiUrl}/orders`)
      .then((response) => {
        console.log("response", response);
        response.data.map((item) => {
          console.log("item", item);
          amount.push(item.orderNumber);
          orderDate.push(item.orderDate);
        });
        setOrder(orderDate);
        setData(amount);
        console.log("amount", amount, orderDate);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Chart
          options={{
            chart: {
              id: "apexchart-example",
            },
            xaxis: {
              orders: order,
            },
          }}
          series={[
            {
              name: "order",
              data: data,
            },
          ]}
          type="line"
          width={1100}
          height={700}
        />
      </Row>
    </Container>
  );
};

export default Charts;
