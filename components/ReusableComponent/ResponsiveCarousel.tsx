import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// import Carousel from '@mui/x-data-grid-pro/Carousel';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

interface ResponsiveCarouselProps {
    items: [{image: string}];
    coverPhoto: string;
    sx: any;
}

const SwipeableTextMobileStepper: React.FC<ResponsiveCarouselProps> = ({ items = [] , coverPhoto, sx  }) => {

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1,}}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {items && items.length > 0 ? items?.map((step : {image: string}, index: number) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
              component="img"
              sx={sx}
                // src={step?.image.slice(0,5)== 'https' ? step?.image : images[index].imgPath}
                src={step?.image?.slice(0,5)== 'https' ? step?.image : coverPhoto}
                alt={images[index]?.label}
              />
            ) : null}
          </div>
        )) : 
        images?.map((step : {label: string, imgPath: string}, index: number) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
              component="img"
              sx={sx}
                // src={step?.image.slice(0,5)== 'https' ? step?.image : images[index].imgPath}
                src={step?.imgPath}
                alt={step?.label}
              />
            ) : null}
          </div>
        ))
      }
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;





// const SwipeableTextMobileStepper : React.FC<ResponsiveCarouselProps> = ({ items , coverPhoto, sx  }) => {
//   const [index, setIndex] = React.useState(0);

//   const handleNext = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const handlePrev = () => {
//     setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   return (
//     <Paper elevation={3} style={{ padding: 16 }}>
//       <Carousel index={index} onRequestChange={setIndex} animation="fade">
//       {items?.map((step : {image: string}, index: number) => (
//           <div key={index}>
//               <Box
//               component="img"
//               sx={sx}
//                 // src={step?.image.slice(0,5)== 'https' ? step?.image : images[index].imgPath}
//                 src={step?.image?.slice(0,5)== 'https' ? step?.image : coverPhoto}
//                 alt={images[index]?.label}
//               />
//           </div>
//         ))}
//       </Carousel>
//       <div style={{ marginTop: 16, textAlign: 'center' }}>
//         <Button onClick={handlePrev} disabled={index === 0}>
//           Previous
//         </Button>
//         <Button onClick={handleNext} disabled={index === images.length - 1} style={{ marginLeft: 16 }}>
//           Next
//         </Button>
//       </div>
//     </Paper>
//   );
// };

// export default SwipeableTextMobileStepper;
