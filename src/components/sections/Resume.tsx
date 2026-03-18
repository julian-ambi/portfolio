interface ResumeProps {
  isVisible: boolean;
}

export default function Resume({ isVisible }: ResumeProps) {
  return (
    <section
      id="resume"
      className={`resume${isVisible ? " section-show" : ""}`}
    >
      <div className="container">
        <div className="section-title">
          <h2>職務経歴</h2>
          <p>職務経歴書を確認する</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <h3 className="resume-title">概要</h3>
            <div className="resume-item pb-0">
              <h4>ジュリアン・モク</h4>
              <p>
                <em>
                  2018 年より日本の IT 企業にて、フルスタックエンジニアとして
                  Web アプリケーション開発およびインフラ設
                  計・運用に従事しました。 Next.js、 Ruby on Rails、 PHP、
                  Python などを使用した開発経験に加え、 AWS・ GCP
                  を活用したサーバーレス環 境の構築にも携わりました。
                  また、技術リーダーとしてチームの進捗管理や品質管理を担当し、プロジェクト全体の円滑な進行をサポート
                  しました。
                </em>
              </p>
            </div>

            <h3 className="resume-title">学歴</h3>
            <div className="resume-item">
              <h4>理学士号（コンピューティング専攻）取得</h4>
              <h5>2014 - 2018</h5>
              <p>
                <em>香港理工大学 (PolyU) コンピューティング学部</em>
              </p>
            </div>
          </div>

          <div className="col-lg-8">
            <h3 className="resume-title">職務経歴</h3>

            <div className="resume-item">
              <h4>フルスタックエンジニア／テックリード</h4>
              <h5>2024年02月～2026年01月</h5>
              <p>
                <em>株式会社SUPERNOVA（業務委託）</em>
              </p>
              <p>事業内容：生成AI技術を活用したWebサービス開発、受託Webシステム開発</p>
              <ul>
                <li>
                  ユーザーがAIモーダルを作成・カスタマイズできるプラットフォームの設計・実装
                </li>
                <li>
                  Next.js、Go、LangChainを用いたフロント／バックエンド開発
                </li>
                <li>
                  Terraformを用いてGCPインフラ（Cloud Functions、Cloud Monitoring等）リソース管理・構成変更を自動化
                </li>
                <li>
                  GitHub ActionsによるCI/CDパイプラインを構築し、開発・ステージング・本番環境への自動デプロイを実現
                </li>
                <li>
                  React、Python、DifyAIを活用したSNSキャンペーン向けAIコンテンツモデレーションシステムの開発
                </li>
                <li>
                  AWS Lambda／DynamoDB／S3を用いたスケーラブルなバックエンド構築
                </li>
                <li>
                  LINE Messaging APIと連携し、ユーザーとの自動対話、アンケート収集を自動化
                </li>
                <li>
                  チーム進捗管理・コードレビューなどの技術リーダー業務
                </li>
                <li>
                  ユーザーによるAIモーダル作成機能を実装し、カスタマイズ率30％向上
                </li>
                <li>
                  SNS投稿の自動モデレーションにより、手作業確認工数を50％削減
                </li>
                <li>
                  技術リーダーとしてチーム開発効率を改善、プロジェクト納期を2週間短縮
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>フルスタックエンジニア</h4>
              <h5>2021年01月～2023年11月</h5>
              <p>
                <em>株式会社ワサビ（業務委託）</em>
              </p>
              <p>事業内容：EC統合管理システム「WASABI SWITCH」の開発</p>
              <ul>
                <li>
                  EC統合管理システム「WASABI SWITCH」のバックエンド・フロントエンド開発
                </li>
                <li>
                  複数ECモールへの商品一括登録・自動カテゴリ判定・画像合成・自動翻訳機能の開発
                </li>
                <li>
                  注文ステータス自動同期、請求書・領収書出力機能の実装
                </li>
                <li>
                  UPSや物流システムとのAPI連携およびPOS連動機能の開発
                </li>
                <li>
                  フロントエンド（React）とバックエンド（PHP／Laravel）の開発・保守
                </li>
                <li>
                  商品一括登録・自動翻訳機能により、ECショップの作業時間を約40％削減
                </li>
                <li>
                  注文ステータス自動同期・POS連携により、店舗在庫とEC在庫の整合性を向上
                </li>
                <li>
                  API連携の最適化により、システム稼働率を99.9％維持
                </li>
                <li>
                  新規ECモール対応機能を実装し、クライアントショップの海外販売チャネルを拡大
                </li>
              </ul>
            </div>

            <div className="resume-item">
              <h4>フルスタックエンジニア</h4>
              <h5>2018年07月～2020年12月</h5>
              <p>
                <em>EIRE Systems Hong Kong（正社員）</em>
              </p>
              <p>事業内容：ECサイト、ホテル予約システムの開発</p>
              <ul>
                <li>
                  ECサイトおよびホテル予約システムの開発・運用
                </li>
                <li>
                  フロントエンド・バックエンド双方の設計・実装を担当
                </li>
                <li>
                  ECサイト：商品登録、在庫管理、注文処理、決済連携機能の実装
                </li>
                <li>
                  ホテル予約システム：空室検索、予約処理、料金計算、カレンダー管理機能の開発
                </li>
                <li>
                  Ruby on Rails、Node.jsおよびMySQLを用いたバックエンド開発
                </li>
                <li>
                  JavaScript／Reactを用いたフロントエンド開発
                </li>
                <li>
                  API設計・連携、サーバー管理、運用サポート
                </li>
                <li>
                  ECサイトの商品登録・在庫管理自動化により、運用工数を約30％削減
                </li>
                <li>
                  ホテル予約システムの検索・予約処理速度を改善し、ユーザー利便性を向上
                </li>
                <li>
                  Ruby on Rails、Node.jsを用いたバックエンドの最適化により、システム安定稼働率を99％維持
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
