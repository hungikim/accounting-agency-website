import "./Prices.css";

import personIcon from './assets/person-square.svg'
import buildingIcon from './assets/building-fill.svg'
import { useEffect } from "react";

export default function Prices() {
  useEffect(() => {
    document.querySelector(".Prices").style.opacity = "1";
  }, []);
  return (
    <div className="Prices">
      <h1 className="content-intro">
        "체계적인 절세 전략으로
        <br />
        대표님의 자산을 지켜드리겠습니다."
      </h1>

      <div className="prices-wrapper">
        <section className="price-section">
          <h2 className='price-title'>
          <img src={personIcon} className='price-icon' />
            개인사업자
          </h2>
          <ul className="price-list">
            <li>부가가치세 신고</li>
            <li>원천세 신고</li>
            <li>간이지급명세서 신고</li>
            <li>일용근로소득지급명세서 신고</li>
            <li>이월 결손금 공제</li>
            <li>정부지원금 적용</li>
            <li>종합소득세 (조정료 발생)</li>
            <li>법인 설립/전환 지원</li>
            <li>각 사업에 적합한 세무 매뉴얼 제공</li>
            <li>비대면 세무 상담</li>
          </ul>
          <h3 className='price'>
            <span className='price-number'>100,000원&nbsp;</span>
            <span className='price-tilde'>~</span>
          </h3>
        </section>
        <section className="price-section">
          <h2 className='price-title'>
            <img src={buildingIcon} className='price-icon' />
            법인사업자
          </h2>
          <ul className="price-list">
            <li>부가가치세 신고</li>
            <li>원천세 신고</li>
            <li>간이지급명세서 신고</li>
            <li>일용근로소득지급명세서 신고</li>
            <li>이월 결손금 공제</li>
            <li>대출/투자 및 정부지원금 적용</li>
            <li>법인세 (조정료 발생)</li>
            <li>비지급금 관리</li>
            <li>각 사업에 적합한 세무 매뉴얼 제공</li>
            <li>비대면 세무 상담</li>
          </ul>
          <h3 className='price'>
            <span className='price-number'>150,000원&nbsp;</span>
            <span className='price-tilde'>~</span>
          </h3>
        </section>
      </div>
    </div>
  );
}
