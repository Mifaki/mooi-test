import { Divider, Typography } from 'antd';
import { TabsItems } from '../model/TabsData';
import CustomTabs from './presentation/CustomTabs/CustomTabs';

const { Title } = Typography;

const CRM = () => {
  return (
    <div>
      <Title>CRM</Title>
      <Divider />
      <CustomTabs
        tabs={TabsItems}
      />
    </div>
  )
}

export default CRM