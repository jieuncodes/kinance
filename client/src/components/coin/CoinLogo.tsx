function CoinLogo({ coinId }: { coinId: number }) {
  return (
    <img
      src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coinId}.png`}
      alt={"logo"}
      className="w-6 h-6 mr-2 mt-2"
    />
  );
}

export default CoinLogo;
