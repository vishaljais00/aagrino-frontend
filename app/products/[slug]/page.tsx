"use client";
import { useEffect, useState } from "react";
import { useGetProductBySlugQuery } from "@/redux/feature/products/productAPI";
import { useParams } from "next/navigation";
import ResponsiveCarousel from '@/components/ReusableComponent/ResponsiveCarousel'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField, Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import HoverRating from "@/components/ratingComponent/HoverRating";
import UserReview from "@/components/UserReview/UserReview";
import DynamicTypography from "@/components/DynamicTypography/DynamicTypography";
import { usePostCommentMutation, usePostRatingMutation } from "@/redux/feature/rating/ratingApi";


interface Iproduct {
  "id": number,
  "price": number,
  "size": {
    "size":  string
  },
  "color": {
    "color": string
  }
}

interface IReview {
  comment: string;
  user: {
    profile: {
      profilePic: string
    },
    name: string
  }
}



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const SingleProduct = () => {
  const { slug = "" } = useParams();

  const [value, setValue] = useState<number>(5);
  const [review, setReview] = useState<string>("");

  
  const { data, error: getProductError, isLoading } = useGetProductBySlugQuery(slug as string);
  const [postRating, { isLoading: postRatingIsLoading, isError: postRatingIsError, isSuccess: postRatingIsSuccess, error: postRatingError }] = usePostRatingMutation(); 
  const [postComment, { isLoading: postCommentIsLoading, isError: postCommentIsError, isSuccess: postCommentIsSuccess, error: postCommentError }] = usePostCommentMutation();
  
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [sizeArr, setSizeArr] = useState<Iproduct[]>([]);
  const [selectedProductItem, setelectedProductItem] = useState<Iproduct | null>(null);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value );
  };

  const controlProps = (item: string) => ({
    checked: selectedColor === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });


  const handleReviewChange = (event: any) => {
    setReview(event.target.value);
  };

  const handleReviewSubmit = async() => {
    // Handle the review submission logic
   
    try {
      if(typeof(slug) == 'string'){
        await postRating({slug, rating: value })
        await postComment({slug ,comment: review })
      }
      
    } catch (error) {
      console.log(error, 'error')
    }
  };

  const findAllSizeByColor = (color: string) =>{
    const arr: Iproduct[] =  data?.data?.variants?.filter((item : Iproduct)=>{
         return item.color.color == color
     })
     setSizeArr(arr)
     if(arr.length > 0){
       setSelectedSize(arr[0]?.size?.size)
       setelectedProductItem(arr[0])
     }
  }

  const handlePriceAndSize = (pId: string) =>{
    const p_selected_item: Iproduct = data?.data?.variants?.find((item : Iproduct)=> item.id == parseInt(pId))
    if(p_selected_item){
      setelectedProductItem(p_selected_item)
    }
    setSelectedSize(p_selected_item?.size?.size)
  }

  useEffect(() => {
    if(data?.data?.variants[0]?.color?.color) {
      setSelectedColor(data?.data?.variants[0]?.color?.color)
    }
  }, [data])

  useEffect(()=>{
    if(selectedColor !== ''){
      findAllSizeByColor(selectedColor)
    }
  }, [selectedColor])
  
  
  return (
    <>
    <Box sx={{ flexGrow: 1 , padding: 5 }}>
      <Grid container spacing={4}>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <Item>
            <ResponsiveCarousel items={data?.data?.ProductsImage} coverPhoto={data?.data?.coverPhoto} sx={{
                height: '100%',
                display: 'block',
                maxWidth: '100%',
                overflow: 'hidden',
                objectFit:'contain',
                width: '100%',
                maxHeight: {
                  xs: '400px', // Extra small screens and up
                  sm: '400px', // Small screens and up
                  md: '300px', // Medium screens and up
                  lg: '300px', // Large screens and up
                  xl: '300px', // Extra large screens and up
                },
              }} />
          </Item>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12}>
          <Item sx={{ textAlign: 'left' }}> 
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-xl title-font font-medium mb-1 mt-4">
                {data?.data?.name ||  "Fam locavore"}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                {
                  Array.from({ length: 5 }).map((item, i) => (
                    <span key={i}>
                      {i < (data?.data?.avgRating > 0 ? data?.data?.avgRating : 4) ? (
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ) : (
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      )}
                    </span>
                  ))
                }

                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{data?.data?.description || "Blue-Denim-Jeans"}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex items-center">
                  <span className="mr-3 mt-1">Color</span>
                  {Array.from(new Set(data?.data?.variants?.map((variant: Iproduct) => variant.color.color ?? '')))?.map((item: any, i: number) => (
                    <Radio
                      key={i}
                      {...controlProps(`${item}`)}
                      sx={{
                        color: `${item?.toLowerCase() ?? ''}`,
                        '&.Mui-checked': {
                          color: `${item?.toLowerCase() ?? ''}`,
                        },
                      }}
                    />
                  ))}
                  {/* <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none" />
                  <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none" /> */}
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10" onChange={(e)=>{handlePriceAndSize(e.target.value)}}>
                    {sizeArr?.map((item: Iproduct, i: number) =>
                      <option key={i} selected={selectedSize == item.size.size} value={item.id}>{item.size.size}</option>
                    )}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rs.{selectedProductItem?.price}
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to cart 
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
          </Item>
        </Grid>
      </Grid>
    </Box>    
    {/* review box */}

    <Box sx={{ flexGrow: 1 , padding: 5 }}>
      <Grid container spacing={2}>
        <Grid item lg={5}  md={5} sm={12} xs={12}>
          <Item sx={{ flexGrow: 1 , padding: 5, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <HoverRating value={value} setValue={setValue} />
              <TextField
                id="outlined-multiline-flexible"
                label="Write your review"
                multiline
                rows={4}
                value={review}
                onChange={handleReviewChange}
                variant="outlined"
                fullWidth
                style={{ marginBottom: 16 , marginTop: 10}}
              />

              <Button
              variant="outlined" 
              color="success"
              onClick={handleReviewSubmit}
              type="submit"
              >
              Submit Review
            </Button>
          </Item>
        </Grid>
        <Grid item lg={7}  md={7} sm={12} xs={12}>
        
        <Item sx={{ flexGrow: 1 , padding: 5, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'initial' }}>
          <DynamicTypography variant="h6" content="review" />
          {data?.data?.Comment?.map((item: IReview , i: number)=> 
            <UserReview key={i} review = {item.comment}  user={item.user} />)}  
        </Item>
        </Grid>
      </Grid>
    </Box>
    </>
  );
};

export default SingleProduct;

