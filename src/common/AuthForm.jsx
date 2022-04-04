import tw, { styled } from 'twin.macro';

export const FormWrapper = styled.div`
  ${tw`
    flex 
    flex-col    
    gap-y-3
    pb-4
  `}

  input{
    ${tw`
      bg-transparent 
      border
      border-black
      dark:border-white
      focus:border-accent
      p-3
      rounded-lg 
      text-xl
      outline-none
    `}
  }
`;

export const Label = styled.div`
  ${tw`
    text-accent 
    text-lg 
    font-semibold
    mb-1
  `}
`;

export const FieldWrapper = styled.div`
  ${tw`
    flex 
    flex-col
    relative
  `}
`;

export const ErrorWrapper = styled.div`
  ${tw`
    w-full 
    flex 
    justify-end
    mt-[2px]
    text-accent
    italic
    absolute
    text-sm
  `}
`;

export const FormButton = styled.button`
  ${tw`
    self-start
    bg-accent 
    rounded-lg 
    px-5
    py-2
    text-lg
    font-semibold
    mt-3
    text-white
    hover:bg-accent-lighter
  `}
`;

export const FormMessage = styled.div`
  ${tw`
    w-full
  `}

  a{
    ${tw`
      text-accent
      font-semibold
    `}
  }
`;
