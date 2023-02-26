const Form = ({ setWord, getPhotoData }: any) => {
  return (
    <form className="mt-4 text-center">
      <input
        type="text"
        name="keyword"
        placeholder="e.g. cat"
        className="border-so w-[300px] border-2 border-gray-400"
        onChange={(e) => setWord(e.target.value)}
      />
      <button
        type="submit"
        className="border-so ml-2 w-[50px] border-2 border-blue-500"
        onClick={getPhotoData}
      >
        検索
      </button>
    </form>
  );
};

export default Form;
