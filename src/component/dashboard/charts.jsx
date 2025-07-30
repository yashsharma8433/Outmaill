// components/dashboard/Charts.tsx

import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';

export function LineChart() {
  return (
    <div className="h-60">
      <ResponsiveLine
        data={[
          {
            id: 'Applications',
            data: [
              { x: 'Jan', y: 12 },
              { x: 'Feb', y: 19 },
              { x: 'Mar', y: 27 },
              { x: 'Apr', y: 20 },
              { x: 'May', y: 25 },
              { x: 'Jun', y: 30 },
            ],
          },
        ]}
        margin={{ top: 10, right: 20, bottom: 50, left: 40 }}
        axisBottom={{ tickRotation: -30 }}
        colors={{ scheme: 'purple' }}
        theme={{ textColor: '#fff' }}
        curve="monotoneX"
        enablePoints={false}
      />
    </div>
  );
}

export function BarChart() {
  return (
    <div className="h-60">
      <ResponsiveBar
        data={[
          { category: 'Backend', value: 45 },
          { category: 'DevOps', value: 30 },
          { category: 'Mobile', value: 40 },
        ]}
        keys={['value']}
        indexBy="category"
        margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
        padding={0.3}
        colors="#A46EDB"
        theme={{ textColor: '#fff' }}
      />
    </div>
  );
}

export function PieChart() {
  return (
    <div className="h-60">
      <ResponsivePie
        data={[
          { id: 'Applied', value: 35 },
          { id: 'Interviewed', value: 30 },
          { id: 'Rejected', value: 25 },
          { id: 'Offer', value: 10 },
        ]}
        colors={['#4F21A1', '#6B1C9A', '#A46EDB', '#D4BBF0']}
        margin={{ top: 10, bottom: 10 }}
        innerRadius={0.5}
        theme={{ textColor: '#fff' }}
        enableArcLabels={false}
        legends={[]}
      />
    </div>
  );
}
