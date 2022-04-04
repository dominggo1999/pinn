import tw, { styled } from 'twin.macro';

export const LoginWrapper = styled.div`
  ${tw`
    w-full 
    h-screen
    bg-primary
    dark:bg-primary-dark
    text-white
    flex
  `}
`;

export const VideoWrapper = styled.div`
  ${tw`
    relative
    w-5/12
    h-screen
    hidden 
    lg:flex
    
  `}

  video{
    ${tw`
      w-full
      object-cover
      object-center 
    `}
  }
`;

export const Overlay = styled.div`
  ${tw`
    w-full 
    h-full
    absolute
    top-0 
    left-0
    bg-black 
    opacity-20 
  `}
`;

export const FormSection = styled.div`
  ${tw`
    mx-auto
    max-w-[600px]
    h-full 
    flex
    flex-col
    px-10
    gap-y-3
    justify-center
  `}
`;

export const Title = styled.div`
  ${tw`
    text-accent
    text-4xl 
    font-bold 
  `}
`;

export const Description = styled.div`
  ${tw`
    text-lg
  `}
`;
