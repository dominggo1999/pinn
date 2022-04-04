import tw, { styled } from 'twin.macro';

export const LoginWrapper = styled.div`
  ${tw`
    w-full 
    min-h-screen
    bg-primary
    dark:bg-primary-dark
    dark:text-white
    flex
    transition 
    transition-bg
    ease-out-sine
    duration-400 
    items-stretch
  `}
`;

export const VideoWrapper = styled.div`
  ${tw`
    relative
    w-5/12
    min-h-full
    max-h-full
    hidden 
    lg:flex
    overflow-hidden
  `}

  video{
    ${tw`
      absolute
      min-h-screen
      w-full
      object-cover
      object-center
      -translate-y-1/2
      top-1/2
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
    px-5
    md:px-10
    gap-y-3
    relative
    pt-14
    pb-10
  `}
`;

export const ThemeSwitchWrapper = styled.div`
  ${tw`
    absolute
    bottom-0
    right-0
    px-5
    md:px-10
    py-3
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
