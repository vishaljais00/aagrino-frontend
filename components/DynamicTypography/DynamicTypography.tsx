import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



interface DynamicTypographyProps {
  variant: string;
  content: string;
}

const DynamicTypography: React.FC<DynamicTypographyProps> = ({ variant = 'h1' , content = 'body2. Lorem ipsum' }) => {
  
  const renderTypography = () => {
    switch (variant) {
      case 'h1':
        return <Typography variant="h1"  gutterBottom>{content}</Typography>;
      case 'h2':
        return <Typography variant="h2" gutterBottom>{content}</Typography>;
      case 'h3':
        return <Typography variant="h3" gutterBottom>{content}</Typography>;
      case 'h4':
        return <Typography variant="h4" gutterBottom>{content}</Typography>;
      case 'h5':
        return <Typography variant="h5" gutterBottom>{content}</Typography>;
      case 'h6':
        return <Typography variant="h6" gutterBottom>{content}</Typography>;
      case 'subtitle1':
        return <Typography variant="subtitle1" gutterBottom>{content}</Typography>;
      case 'subtitle2':
        return <Typography variant="subtitle2" gutterBottom>{content}</Typography>;
      case 'body1':
        return <Typography variant="body1" gutterBottom>{content}</Typography>;
      case 'body2':
        return <Typography variant="body2" gutterBottom>{content}</Typography>;
      case 'button':
        return <Typography variant="button" display="block" gutterBottom>{content}</Typography>;
      case 'caption':
        return <Typography variant="caption" display="block" gutterBottom>{content}</Typography>;
      case 'overline':
        return <Typography variant="overline" display="block" gutterBottom>{content}</Typography>;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      {renderTypography()}
    </Box>
  );
}

export default DynamicTypography;
