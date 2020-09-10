import React from 'react';
import { Row, Col } from 'antd';
import { createCard1, createCard2, createCard3, createCard4, createCard, divider } from '../common';
import { 
  layer0_cdn, layer0_p2pm, layer0_vm, layer0_vm_c, layer0_vm_d, layer0_vm_eos, layer0_vm_utxo,
  layer1_cons_pow, layer1_cons_pos, layer1_cons_dpos, layer1_cons_poc,
  layer1_cons_poh, layer1_cons_poa, layer1_cons_tangle, layer1_cons_ava,
  layer1_cons_dbft, layer1_cons_pbft, layer1_cons_vbft, layer1_cons_lattice,
  layer1_data, layer1_data_pub, layer1_shard, layer1_inter,
  layer2_channels, layer2_plasma, layer2_storage_incent, layer2_side, layer2_rollup,
  layer2_cpu, layer2_oracle, layer2_geo, layer2_ilp, 
  layer2_pcc, layer2_ovc, layer2_es, layer2_pr, layer3_api, layer3_lang,
  layer4_content, layer4_game, layer4_dao, layer4_ad, layer4_msg, layer4_mkt, layer4_user,
  layer4_pay, layer4_lend, layer4_der, layer4_stable, layer4_syn, layer4_insur, layer4_ex, layer4_custo, layer4_pred,
} from '../../data/projects/web3'

const Web3Page = () => (
  <Col>
    {divider('链上 -> 基础设施&网络层 -> Layer0')}
    <Row gutter={24}>
      <Col xl={6} lg={24} md={24} sm={24} xs={24}>
        {createCard2('P2P层 -> CDN&BDN', layer0_cdn)}
      </Col>
      <Col xl={6} lg={24} md={24} sm={24} xs={24}>
        {createCard2('P2P层 -> 模块化P2P网络栈', layer0_p2pm)}
      </Col>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        {createCard2('虚拟机', layer0_vm)}
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={10} lg={24} md={24} sm={24} xs={24}>
        {createCard4('虚拟机 -> 自定义虚拟机', layer0_vm_c)}
      </Col>
      <Col xl={6} lg={24} md={24} sm={24} xs={24}>
        {createCard2('虚拟机 -> Direct LLVM exposure', layer0_vm_d)}
      </Col>
      <Col xl={4} lg={24} md={24} sm={24} xs={24}>
        {createCard1('虚拟机 -> 基于WASM', layer0_vm_eos)}
      </Col>
      <Col xl={4} lg={24} md={24} sm={24} xs={24}>
        {createCard1('虚拟机 -> UTXO', layer0_vm_utxo)}
      </Col>
    </Row>
    {divider('链上 -> 协议层 -> Layer1')}
    <Row gutter={24}>
      <Col xl={8} lg={24} md={24} sm={24} xs={24}>
        {createCard3('共识协议 -> PoW', layer1_cons_pow)}
      </Col>
      <Col xl={10} lg={24} md={24} sm={24} xs={24}>
        {createCard4('PoS', layer1_cons_pos)}
      </Col>
      <Col xl={6} lg={24} md={24} sm={24} xs={24}>
        {createCard2('DPoS', layer1_cons_dpos)}
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={6} lg={24} md={24} sm={24} xs={24}>
        {createCard2('PoC/PoST', layer1_cons_poc)}
      </Col>
      <Col xl={6} lg={24} md={24} sm={24} xs={24}>   
        {createCard2('PoA', layer1_cons_poa)}
      </Col>
      <Col xl={3} lg={24} md={24} sm={24} xs={24}>
        {createCard1('PoH', layer1_cons_poh)}
      </Col>
      <Col xl={3} lg={24} md={24} sm={24} xs={24}>
        {createCard1('PBFT', layer1_cons_pbft)}
      </Col>
      <Col xl={3} lg={24} md={24} sm={24} xs={24}>
        {createCard1('DBFT', layer1_cons_dbft)}
      </Col>
      <Col xl={3} lg={24} md={24} sm={24} xs={24}>
        {createCard1('VBFT', layer1_cons_vbft)}
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={15} lg={24} md={24} sm={24} xs={24}>
        {createCard('数据分发协议', layer1_data)}
      </Col>
      <Col xl={3} lg={24} md={24} sm={24} xs={24}>
        {createCard1('DAG -> Tangle', layer1_cons_tangle)}
      </Col>
      <Col xl={3} lg={24} md={24} sm={24} xs={24}>
        {createCard1('DAG -> Lattice', layer1_cons_lattice)}
      </Col>
      <Col xl={3} lg={24} md={24} sm={24} xs={24}>
        {createCard1('Avalanche', layer1_cons_ava)}
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={6} lg={24} md={24} sm={24} xs={24}>
        {createCard2('瞬时数据发布/订阅消息协议', layer1_data_pub)}
      </Col>
      <Col xl={18} lg={24} md={24} sm={24} xs={24}>
        {createCard('分片协议', layer1_shard, '16.66%')}
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        {createCard('互操作性协议', layer1_inter, '11.11%')}
      </Col>
    </Row>
    {divider('链下 -> 中间件 -> 链下服务 -> Layer2')}
    <Row gutter={24}>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        {createCard4('状态通道', layer2_channels)}
        {createCard4('Plasma协议', layer2_plasma)}
      </Col>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        {createCard4('侧链', layer2_side)}
        {createCard4('Roll Up', layer2_rollup)}
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        {createCard4('存储激励', layer2_storage_incent)}
      </Col>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        {createCard4('Interledger协议', layer2_ilp)}
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={9} lg={24} md={24} sm={24} xs={24}>
        {createCard3('预言机', layer2_oracle)}
      </Col>
      <Col xl={9} lg={24} md={24} sm={24} xs={24}>
        {createCard3('繁重计算', layer2_cpu)}
      </Col>
      <Col xl={6} lg={24} md={24} sm={24} xs={24}>
        {createCard2('地理空间数据', layer2_geo)}
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={3} lg={24} md={24} sm={24} xs={24}>
        {createCard1('隐私云计算', layer2_pcc)}
      </Col>
      <Col xl={3} lg={24} md={24} sm={24} xs={24}>
        {createCard1('链下可验证计算', layer2_ovc)}
      </Col>
      <Col xl={3} lg={24} md={24} sm={24} xs={24}>
        {createCard1('加密存储', layer2_es)}
      </Col>
      <Col xl={3} lg={24} md={24} sm={24} xs={24}>
        {createCard1('代理重加密', layer2_pr)}
      </Col>
    </Row>
    {divider('链下 -> 中间件 -> Layer3')}
    <Row gutter={24}>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        {createCard('协议可扩展性 -> 开发者API', layer3_api, '12.5%')}
        {createCard('协议可扩展性 -> 开发者编程语言', layer3_lang, '12.5%')}
      </Col>
    </Row>
    {divider('链下 -> 应用层 -> Layer4')}
    <Row gutter={24}>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        {createCard('内容分发&通证化', layer4_content, '12.5%')}
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        {createCard4('游戏', layer4_game)}
      </Col>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        {createCard4('去中心化自治组织', layer4_dao)}
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={6} lg={24} md={24} sm={24} xs={24}>
        {createCard2('广告', layer4_ad)}
      </Col>
      <Col xl={6} lg={24} md={24} sm={24} xs={24}>
        {createCard2('即时通讯', layer4_msg)}
      </Col>
      <Col xl={12} lg={24} md={24} sm={24} xs={24}>
        {createCard4('市场', layer4_mkt)}
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
        {createCard('协议可扩展性 -> 用户界面（DAPP浏览器）', layer4_user, '12.5%')}
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={9} lg={24} md={24} sm={24} xs={24}>
        {createCard3('支付', layer4_pay)}
        {createCard3('衍生品', layer4_der)}
        {createCard3('合成资产发行', layer4_syn)}
      </Col>
      <Col xl={15} lg={24} md={24} sm={24} xs={24}>
        {createCard('信用&借贷', layer4_lend)}
        {createCard('预测市场', layer4_pred)}
        {createCard('稳定币', layer4_stable)}
      </Col>
    </Row>
    <Row gutter={24}>
      <Col xl={17} lg={24} md={24} sm={24} xs={24}>
        {createCard('交易所&流动性', layer4_ex, '16.66%')}
        {createCard('托管服务', layer4_custo, '16.66%')}
      </Col>
      <Col xl={7} lg={24} md={24} sm={24} xs={24}>
        {createCard2('保险', layer4_insur)}
      </Col>
    </Row>
  </Col>
)

export default Web3Page;