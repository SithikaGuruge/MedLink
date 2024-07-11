import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  cursor: "pointer",
  height: 500, 
  borderRadius: theme.shape.borderRadius, 
  boxShadow: theme.shadows[3], 
  transition: "transform 0.2s",
}));

export default function ChannelingCard({
  CentreName,
  description,
  image,
  rating,
  id,
  district,
}) {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    const cardElement = cardRef.current;

    const onMouseEnter = () => {
      gsap.to(cardElement, { scale: 1.05, duration: 0.2 });
    };

    const onMouseLeave = () => {
      gsap.to(cardElement, { scale: 1, duration: 0.2 });
    };

    cardElement.addEventListener("mouseenter", onMouseEnter);
    cardElement.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cardElement.removeEventListener("mouseenter", onMouseEnter);
      cardElement.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const handleCardClick = () => {
    navigate(`/channeling/centre/${id}`);
  };

  return (
    <StyledCard ref={cardRef} onClick={handleCardClick}>
      <CardMedia
        style={{
          width: "100%",
          height: "200px",
          objectFit: "contain",
        }}
        component="img"
        alt={CentreName}
        image={image}
      />
      <CardContent>
        <Typography
          className="text-center font-semibold"
          variant="h5"
          component="div"
        >
          {CentreName}
        </Typography>
        <Typography
          className="text-center font-semibold"
          gutterBottom
          variant="h6"
          component="div"
        >
          {district}
        </Typography>
        <Typography
          className="text-justify"
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Rating className="mx-auto" name="read-only" value={rating} readOnly />
      </CardActions>
    </StyledCard>
  );
}
